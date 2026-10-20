import PropTypes from "prop-types";
import styles from "./DiagramStyles.module.css";

/* High-level system design of the Saha Mind dissertation project. */

function DiagramBox({ x, y, w, h, lines, variant }) {
  const cx = x + w / 2;
  const boxClass =
    variant === "accent"
      ? styles.boxAccent
      : variant === "muted"
        ? styles.boxMuted
        : styles.box;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" className={boxClass} />
      {lines.map((line, i) => (
        <text
          key={line}
          x={cx}
          y={y + (h - (lines.length - 1) * 17) / 2 + 4 + i * 17}
          textAnchor="middle"
          className={i === 0 ? styles.boxTitle : styles.boxSub}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={styles.arrow}
      markerEnd="url(#saha-arrow-head)"
    />
  );
}

DiagramBox.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(["accent", "muted"]),
};

Arrow.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
};

function SahaMindSystem() {
  return (
    <svg
      viewBox="0 0 780 460"
      role="img"
      aria-labelledby="saha-diagram-title saha-diagram-desc"
      className={styles.svg}
    >
      <title id="saha-diagram-title">Saha Mind 4-Agent Architecture</title>
      <desc id="saha-diagram-desc">
        A React Native patient app and Next.js clinician dashboard coordinated
        through a 4-agent LLM pipeline: T5 formatting agent, fine-tuned LLaMA 3.2
        with RAG therapeutic agent, DistilBERT sentiment analyzer, and quantized
        Mistral 7B report generator, backed by Supabase.
      </desc>
      <defs>
        <marker
          id="saha-arrow-head"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
        </marker>
      </defs>

      {/* Patient Client */}
      <DiagramBox
        x={24}
        y={24}
        w={200}
        h={96}
        lines={[
          "Patient Mobile App",
          "Bare React Native · TypeScript",
          "Mood tracking · Quizzes · Chat",
        ]}
      />

      {/* Clinician Client */}
      <DiagramBox
        x={556}
        y={24}
        w={200}
        h={96}
        lines={[
          "Clinician Dashboard",
          "Next.js · TypeScript · ShadCN",
          "Patient analytics · Report review",
        ]}
      />

      {/* 4 Specialized LLM Agents */}
      <DiagramBox
        x={250}
        y={20}
        w={280}
        h={52}
        variant="muted"
        lines={[
          "1. Formatting Agent (T5-Base)",
          "Query normalization & safety (<0.2s)",
        ]}
      />
      <DiagramBox
        x={250}
        y={84}
        w={280}
        h={70}
        variant="accent"
        lines={[
          "2. Therapeutic Agent 'Jarvis'",
          "LLaMA 3.2 Instruct + LoRA (<2s)",
          "RAG: FAISS + MiniLM Embeddings",
        ]}
      />
      <DiagramBox
        x={250}
        y={166}
        w={280}
        h={54}
        variant="accent"
        lines={[
          "3. Sentiment Analysis (DistilBERT)",
          "Emotional valence & marker detection (<3s)",
        ]}
      />
      <DiagramBox
        x={250}
        y={232}
        w={280}
        h={58}
        variant="muted"
        lines={[
          "4. Medical Report Agent (Mistral 7B)",
          "Quantized 7B · Clinical report synthesis (<12s)",
        ]}
      />

      {/* Pipeline Inter-Agent Flow */}
      <Arrow x1={224} y1={50} x2={246} y2={50} />
      <Arrow x1={390} y1={72} x2={390} y2={80} />
      <Arrow x1={246} y1={120} x2={228} y2={100} />
      <Arrow x1={390} y1={154} x2={390} y2={162} />
      <Arrow x1={390} y1={220} x2={390} y2={228} />
      <Arrow x1={530} y1={261} x2={620} y2={124} />

      {/* Cloud & Persistence */}
      <Arrow x1={124} y1={120} x2={124} y2={310} />
      <Arrow x1={656} y1={120} x2={656} y2={310} />
      <Arrow x1={390} y1={290} x2={390} y2={310} />
      <DiagramBox
        x={24}
        y={314}
        w={732}
        h={52}
        lines={[
          "Supabase (Managed PostgreSQL · Real-time sync · Auth / RBAC) + Python FastAPI",
        ]}
      />

      {/* Caption */}
      <text x={390} y={400} textAnchor="middle" className={styles.caption}>
        Figure: 4-agent collaborative architecture and RAG pipeline (Master&apos;s dissertation, Yahia Farès University).
      </text>
    </svg>
  );
}

export default SahaMindSystem;
