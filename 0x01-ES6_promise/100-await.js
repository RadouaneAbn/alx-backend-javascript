import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  return {
    photo: { status: 200, body: photo.body },
    user: { firstName: user.firstName, lastName: user.lastName },
  };
}
