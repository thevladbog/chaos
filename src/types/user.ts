export type UserType = {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  groups?: Array<string>;
};

export type GroupOfUsers = {
  name: string;
  id: string;
  users: UserType[];
  email?: string;
};

export const MOCK_ADMIN: UserType = {
  id: '1',
  fullName: 'Admin Brat',
  email: 'mail@me.com',
};

export const MOCK_USER_1: UserType = {
  id: '2',
  fullName: 'First User',
  email: 'first@me.com',
};

export const FIRST_GROUP: GroupOfUsers = {
  id: 'gr1',
  name: 'HR Supervisors',
  users: [MOCK_ADMIN, MOCK_USER_1],
};
