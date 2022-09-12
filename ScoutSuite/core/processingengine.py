from ScoutSuite.core.console import print_debug, print_exception
from ScoutSuite.utils import manage_dictionary

from ScoutSuite.core.utils import recurse


class ProcessingEngine:
    """

    """

    def __init__(self, ruleset):
        # Organize rules by path
        self.ruleset = ruleset
        self.rules = {}
        for filename in self.ruleset.rules:
            for rule in self.ruleset.rules[filename]:
                if not rule.enabled:
                    continue
                try:
                    manage_dictionary(self.rules, rule.path, [])
                    self.rules[rule.path].append(rule)
                except Exception as e:
                    print_exception(f'Failed to create rule {rule.filename}: {e}')

    def run(self, cloud_provider, skip_dashboard=False):
        # Clean up existing findings
        for service in cloud_provider.services:
            cloud_provider.services[service][self.ruleset.rule_type] = {}

        # Process each rule
        for finding_path in self._filter_rules(self.rules, cloud_provider.service_list):
            for rule in self.rules[finding_path]:

                if not rule.enabled:  # or rule.service not in []: # TODO: handle this...
                    continue

                print_debug(f'Processing {rule.service} rule "{rule.description}" ({rule.filename})')
                finding_path = rule.path
                path = finding_path.split('.')
                service = path[0]
                
                # manage_dictionary(cloud_provider.services[service], self.ruleset.rule_type, {})

                finding_result = {}
                finding_result['description'] = rule.description
                finding_result['path'] = rule.path

                for attr in ['level', 'id_suffix', 'class_suffix', 'display_path']:
                    if hasattr(rule, attr):
                        finding_result[attr] = getattr(rule, attr)
                try:
                    setattr(rule, 'checked_items', 0)
                    finding_result['items'] = recurse(
                        cloud_provider.services, cloud_provider.services, path, [], rule, True)
                    if skip_dashboard:
                        continue
                    finding_result['dashboard_name'] = \
                        rule.dashboard_name
                    finding_result['checked_items'] = \
                        rule.checked_items
                    finding_result['flagged_items'] = \
                        len(finding_result['items'])
                    finding_result['service'] = rule.service
                    finding_result['rationale'] = \
                        rule.rationale if hasattr(rule, 'rationale') else None
                    finding_result['remediation'] = \
                        rule.remediation if hasattr(rule, 'remediation') else None
                    finding_result['compliance'] = \
                        rule.compliance if hasattr(rule, 'compliance') else None
                    finding_result['references'] = \
                        rule.references if hasattr(rule, 'references') else None
                except Exception as e:
                    print_exception(f'Failed to process rule defined in {rule.filename}: {e}')
                    # Fallback if process rule failed to ensure report creation and data dump still happen
                    finding_result['checked_items'] = 0
                    finding_result['flagged_items'] = 0

                # FIXME this only works when re-running locally?
                cloud_provider.services[service][self.ruleset.rule_type][rule.key] = finding_result

    @staticmethod
    def _filter_rules(rules, services):
        return {rule_name: rule for rule_name, rule in rules.items() if rule_name.split('.')[0] in services}
