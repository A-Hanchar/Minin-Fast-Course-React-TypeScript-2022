interface IErrorProps {
  message: string;
}

export function Error({ message }: IErrorProps) {
  return <p className="text-center text-red-600">{message}</p>;
}
