import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    return { status: 200, body: 'success' };
  } catch (error) {
    console.error('Signup system offline');
    return Error('');
  }
}
