interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'API Developer', 'API Consumer', 'Team Member', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'API Market',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read api_documentation', 'Read api_version', 'Read api_rating', 'Read user_subscription'],
  ownerAbilities: [
    'Manage api documentation',
    'Manage api versions',
    'Manage api ratings',
    'Manage user subscriptions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/36107745-7e81-4ee3-a509-a0a597b90ff0',
};
