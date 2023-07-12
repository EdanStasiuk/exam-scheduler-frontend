interface Props {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  onClick
}: React.PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className="h-16 w-full min-w-[6rem] rounded-md border-b-2 border-primary-600 bg-primary-500 px-8 text-xl text-white transition-all hover:border-2 hover:border-primary-500 hover:bg-transparent hover:text-primary-500"
    >
      {children}
    </button>
  );
}