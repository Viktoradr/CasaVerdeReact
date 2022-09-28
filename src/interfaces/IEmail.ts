export interface IEmailConfig {
  personalizations: [
    { to: [ { email: string, name: string }] },
    { from: [ {email: string, name: string }] }
  ]
  from: { email: string, name: string }
  subject: string
  content: [{ type: string; value: string }]
  batchId: string
  ipPoolName: string
  mailSettings: {
    bypassListManagement: { enable: boolean; }
    footer: { enable: boolean }
    sandboxMode: {  enable: boolean };
  }
  trackingSettings: {
    clickTracking: {
      enable: boolean,
      enableText: boolean
    },
    openTracking: {
      enable: boolean,
      substitutionTag: string
    },
    subscriptionTracking: { enable: boolean }
  }
}
