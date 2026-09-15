type Props = { message: string };

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="mt-3 p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded">
      {message}
    </div>
  );
}
