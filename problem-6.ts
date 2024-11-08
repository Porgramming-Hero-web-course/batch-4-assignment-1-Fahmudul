interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, updatedInfo: Partial<Profile>) => {
  return { ...profile, ...updatedInfo };
};



