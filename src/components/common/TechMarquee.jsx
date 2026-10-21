import styles from "./TechMarquee.module.css";

const ITEMS = [
  "FastAPI",
  "React Native",
  "Next.js",
  "LangChain & RAG",
  "Python",
  "PostgreSQL",
  "LLaMA 3.2 & LoRA",
  "Supabase",
  "TypeScript",
  "Docker",
  "Microservices",
  "DistilBERT",
  "Redis",
  "Mistral 7B",
  "Tailwind CSS",
  "Vite",
];

function TechMarquee() {
  // Duplicate array for seamless infinite looping
  const doubleItems = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.track}>
        {doubleItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className={styles.item}>
            <span className={styles.dot}>✦</span>
            <span className={styles.text}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
