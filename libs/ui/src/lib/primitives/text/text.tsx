export type TextProps = { value: string };
export const Text = (props: TextProps) => {
  return <div>{props.value}</div>;
};
