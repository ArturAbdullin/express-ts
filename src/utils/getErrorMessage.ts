type ErrorWithMessage = {
  message: string;
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Error).message === "string"
  );
};

const toErrorWithMessage = (maybeErrorType: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeErrorType)) return maybeErrorType;

  try {
    // next line potentialy throws an error trying to stringify the maybeErrorType
    // when maybeErrorType has circular references for instance
    return new Error(JSON.stringify(maybeErrorType));
  } catch (stringifyError) {
    // fallback
    return new Error(String(maybeErrorType));
  }
};

const getErrorMessage = (error: unknown): string => {
  return toErrorWithMessage(error).message;
};

export default getErrorMessage;
