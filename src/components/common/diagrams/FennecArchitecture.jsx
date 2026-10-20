import PropTypes from "prop-types";
import styles from "./DiagramStyles.module.css";

/* Sanitized, high-level architecture of the Fennec Booking backend.
   Drawn from the actual system — no internal endpoints, data, or secrets. */

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
          y={y + (h - (lines.length - 1) * 16) / 2 + 4 + i * 16}
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
      markerEnd="url(#fennec-arrow-head)"
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

function FennecArchitecture() {
  return (
    <svg
      viewBox="0 0 780 470"
      role="img"
      aria-labelledby="fennec-diagram-title fennec-diagram-desc"
      className={styles.svg}
    >
      <title id="fennec-diagram-title">
        Fennec Booking platform architecture
      </title>
      <desc id="fennec-diagram-desc">
        Web and mobile clients talk to a layered Express.js API, which sits on
        PostgreSQL with Prisma, Redis with Bull queues, and Socket.IO for
        real-time features, and integrates external travel providers, SATIM
        payments, an AI vision passport OCR service, and SendGrid email.
        Operated on an Ubuntu VPS with Docker, Nginx, PM2, GitHub Actions
        CI/CD, and Sentry.
      </desc>
      <defs>
        <marker
          id="fennec-arrow-head"
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

      {/* Clients */}
      <DiagramBox
        x={90}
        y={16}
        w={240}
        h={58}
        lines={["Web app", "Next.js · customer portal"]}
      />
      <DiagramBox
        x={450}
        y={16}
        w={240}
        h={58}
        lines={["Mobile app", "Expo · React Native"]}
      />
      <Arrow x1={210} y1={74} x2={210} y2={116} />
      <Arrow x1={570} y1={74} x2={570} y2={116} />

      {/* API */}
      <DiagramBox
        x={90}
        y={118}
        w={600}
        h={64}
        variant="accent"
        lines={[
          "Fennec Booking API — Express.js",
          "layered: routes → controllers → services · Swagger · Sentry",
        ]}
      />

      {/* Core platform */}
      <text x={90} y={212} className={styles.groupLabel}>
        Core platform
      </text>
      <Arrow x1={240} y1={182} x2={240} y2={220} />
      <DiagramBox
        x={90}
        y={222}
        w={300}
        h={52}
        lines={["PostgreSQL + Prisma", "~50-model relational schema"]}
      />
      <DiagramBox
        x={90}
        y={286}
        w={300}
        h={52}
        lines={["Redis · Bull", "queues · retries · pub/sub"]}
      />
      <DiagramBox
        x={90}
        y={350}
        w={300}
        h={52}
        lines={["Socket.IO", "realtime support · payment updates"]}
      />

      {/* External & AI services */}
      <text x={450} y={212} className={styles.groupLabel}>
        External &amp; AI services
      </text>
      <Arrow x1={600} y1={182} x2={600} y2={220} />
      <DiagramBox
        x={450}
        y={222}
        w={300}
        h={52}
        variant="muted"
        lines={["Travel providers", "flights · hotels · transfers · ferries …"]}
      />
      <DiagramBox
        x={450}
        y={286}
        w={300}
        h={52}
        variant="muted"
        lines={["SATIM payments", "CIB / Edahabia · reconciliation"]}
      />
      <DiagramBox
        x={450}
        y={350}
        w={300}
        h={52}
        variant="muted"
        lines={["AI vision OCR · SendGrid", "passport data · email · vouchers"]}
      />

      {/* Ops strip */}
      <DiagramBox
        x={90}
        y={414}
        w={600}
        h={44}
        variant="muted"
        lines={[
          "Ops — Ubuntu VPS · Docker · Nginx · PM2 · GitHub Actions CI/CD · Sentry",
        ]}
      />
    </svg>
  );
}

export default FennecArchitecture;
