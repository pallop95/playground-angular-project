export interface NewUser {
  username: string;

  fullname: string;
  email: string;
  team: string;
  position: string;
  phone: string;
  // ####
  lexsRole: string;
  lexsSubRole: string;
  viewPermission: string;
  level: string;
  assign: string;
  // ####
  dashboardPermission: DashboardPermission;
  pagePermission: boolean;
  // ####
  debtorPagePermission: boolean;
  debtorPagePermissionDetail: DebtorPagePermissionDetail;
  suitfolderPagePermission: boolean;
  suitfolderPagePermissionDetail: SuitfolderPagePermissionDetail;
  accountPagePermission: boolean;
  accountPagePermissionDetail: AccountPagePermissionDetail;
}

export interface DashboardPermission {
  dp1: boolean;
  dp2: boolean;
  dp3: boolean;
  dp4: boolean;
  dp5: boolean;
  dp6: boolean;
  dp7: boolean;
  // dp8: boolean;
}

export interface DebtorPagePermissionDetail {
  dpp1: boolean;
  dpp2: boolean;
  dpp3: boolean;
  // dpp4: boolean;
}

// 13
export interface SuitfolderPagePermissionDetail {
  spp1: boolean;
  spp2: boolean;
  spp3: boolean;
  spp4: boolean;
  spp5: boolean;
  spp6: boolean;
  spp7: boolean;
  spp8: boolean;
  spp9: boolean;
  spp10: boolean;
  spp11: boolean;
  spp12: boolean;
  // spp13: boolean;
}

// 16
export interface AccountPagePermissionDetail {
  app1: boolean;
  app2: boolean;
  app3: boolean;
  app4: boolean;
  app5: boolean;
  app6: boolean;
  app7: boolean;
  app8: boolean;
  app9: boolean;
  app10: boolean;
  app11: boolean;
  app12: boolean;
  app13: boolean;
  app14: boolean;
  app15: boolean;
  // app16: boolean;
}
