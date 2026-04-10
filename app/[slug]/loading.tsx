export default function Loading() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="animate-pulse">
        <div style={{ height: 30, background: "#ddd", marginBottom: 10 }} />
        <div style={{ height: 10, background: "#eee", width: "80%" }} />
      </div>
    </div>
  );
}
