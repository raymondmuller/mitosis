export default function MyBasicOutputsComponent(props: any) {
  const attrs = { type: 'text' };

  return <input {...props} {...attrs} />;
}
