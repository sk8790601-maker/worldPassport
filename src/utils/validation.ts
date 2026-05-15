export const patterns = {
  name: /^[A-Za-z][A-Za-z\s.'-]{1,79}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^[0-9]{10}$/,
  subject: /^[A-Za-z0-9][A-Za-z0-9\s.,!?&'()/-]{2,120}$/,
  message: /^[\s\S]{10,1000}$/,
  organization: /^[A-Za-z0-9][A-Za-z0-9\s.&,'()-]{1,120}$/,
  address: /^[A-Za-z0-9][A-Za-z0-9\s,./#'()-]{4,200}$/,
  pincode: /^[1-9][0-9]{5}$/,
  password: /^.{6,}$/,
};

const clean = (value: string) => value.trim();

export function validateContactForm(data: { name: string; email: string; phone: string; subject: string; message: string }) {
  if (!patterns.name.test(clean(data.name))) return 'Please enter a valid name using letters only.';
  if (!patterns.email.test(clean(data.email))) return 'Please enter a valid email address.';
  if (!patterns.phone.test(clean(data.phone))) return 'Please enter a valid 10 digit phone number.';
  if (!patterns.subject.test(clean(data.subject))) return 'Subject must be 3 to 120 valid characters.';
  if (!patterns.message.test(clean(data.message))) return 'Message must be between 10 and 1000 characters.';
  return null;
}

export function validatePartnerForm(data: {
  name: string;
  email: string;
  phone: string;
  organization: string;
  address: string;
  pincode: string;
  message: string;
}) {
  if (!patterns.name.test(clean(data.name))) return 'Please enter a valid name using letters only.';
  if (!patterns.email.test(clean(data.email))) return 'Please enter a valid email address.';
  if (!patterns.phone.test(clean(data.phone))) return 'Please enter a valid 10 digit phone number.';
  if (!patterns.organization.test(clean(data.organization))) return 'Please enter a valid organization name.';
  if (!patterns.address.test(clean(data.address))) return 'Please enter a valid address.';
  if (!patterns.pincode.test(clean(data.pincode))) return 'Please enter a valid 6 digit pincode.';
  if (!patterns.message.test(clean(data.message))) return 'Message must be between 10 and 1000 characters.';
  return null;
}

export function validateLoginForm(data: { email: string; password: string }) {
  if (!patterns.email.test(clean(data.email))) return 'Please enter a valid admin email address.';
  if (!patterns.password.test(data.password)) return 'Password must be at least 6 characters.';
  return null;
}

export function validateCommentForm(data: { name: string; email: string; text: string }) {
  if (!patterns.name.test(clean(data.name))) return 'Please enter a valid name using letters only.';
  if (!patterns.email.test(clean(data.email))) return 'Please enter a valid email address.';
  if (!patterns.message.test(clean(data.text))) return 'Comment must be between 10 and 1000 characters.';
  return null;
}