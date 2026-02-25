export const getInitials = (firstname?: string, lastname?: string): string => {
  let initials = "";

  if (firstname) initials += firstname[0].toUpperCase();
  if (lastname) initials += lastname[0].toUpperCase(); 

  return initials || "A";
}