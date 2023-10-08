type Props = {
  icon: JSX.Element;
  variant: "red" | "slate";
  text: string;
};

const SignInButton = ({ icon, variant, text }: Props) => {
  const buttonBackgoundColor = {
    red: "bg-red-500",
    slate: "bg-slate-600",
  };

  return (
    <button
      type="button"
      className={`${buttonBackgoundColor[variant]} px-3.5 py-2.5 font-bold rounded-lg text-white flex items-center gap-2`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SignInButton;