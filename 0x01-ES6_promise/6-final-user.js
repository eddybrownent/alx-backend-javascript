import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let result = [];

  try {
    const userProfile = await signUpUser(firstName, lastName);
    result = [...result, { status: 'fulfilled', value: userProfile }];
    await uploadPhoto(fileName);
    result = [...result, { status: 'fulfilled', value: 'Photo uploaded successfully' }];
  } catch (error) {
    result = [...result, { status: 'rejected', value: `Error: ${fileName} cannot be processed` }];
  }

  return result;
}
