interface PlaceholderProps {
  title: string;
}

function ComingSoonPlaceholder({ title }: PlaceholderProps) {
  return (
    <h1 style={{ color: "#fff", textAlign: "center" }}>
      {title} Coming Soon...
    </h1>
  );
}

export default ComingSoonPlaceholder;
