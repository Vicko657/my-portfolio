interface ButtonProps {
  url: string;
  text: string;
  type: string;
}

function Button({ url, text, type }: ButtonProps) {
  return (
    <a
      href={url}
      className={`${type != null ? "block" : "hidden"} text-xs py-1 wrap-anywhere shadow-xs outline hover:bg-indigo-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
    >
      {text}
    </a>
  );
}

export default Button;
