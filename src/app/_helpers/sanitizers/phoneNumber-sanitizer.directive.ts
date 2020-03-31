export function sanitizePhoneNumber(phoneNumber: string) {
  // convert phoneNumber to string
  phoneNumber = phoneNumber.toString();
  return phoneNumber.replace(/ +/g, '').replace(' ', '').replace(/[-]/, '').replace(/[)]/, '');
}
