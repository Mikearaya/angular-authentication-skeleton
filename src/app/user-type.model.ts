export const userClaims = {
  bearerToken: "",
  isAuthenticated: true,
  claims: [
    { claimType: "canViewUserSection", claimValue: "true" },
    { claimType: "canViewAdminSection", claimValue: "false" }
  ],
  userName: "User"
};

export const AdminClaims = {
  bearerToken: "",
  isAuthenticated: true,
  claims: [
    { claimType: "canViewUserSection", claimValue: "true" },
    { claimType: "canViewAdminSection", claimValue: "true" }
  ],
  userName: "Admin"
};
