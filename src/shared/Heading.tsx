type HeadingProps ={
    children: React.ReactNode;
    level: 1|2|3|4|5|6;
};

const Heading = (props: HeadingProps) => {
  const Tag =`h${props.level}` as keyof JSX.IntrinsicElements;
  return(
  <main>
    <Tag className="text-lg font-bold">{props.children}</Tag>
  </main>)
}

export default Heading;
