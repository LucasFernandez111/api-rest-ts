import { Response } from "express";

/**
 *
 * @param res
 * @param error
 * @param code
 * @param errorRaw Optional
 *
 */

const handleHttp = (
  res: Response,
  error: string,
  code: number,
  errorRaw?: any
): void => {
  if (errorRaw) console.info(errorRaw);

  res.status(code).send({ error });
};

export { handleHttp };
