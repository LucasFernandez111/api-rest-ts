import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string): Promise<string> => {
  const passwordHash = await hash(pass, 8);

  return passwordHash;
};

const verifyPass = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);

  return isCorrect;
};

export { encrypt, verifyPass };
