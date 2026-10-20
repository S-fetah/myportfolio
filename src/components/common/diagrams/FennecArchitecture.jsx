import PropTypes from "prop-types";
import styles from "./DiagramStyles.module.css";

/* High-level service integration architecture for Fennec Booking.
   Sanitized to comply with non-disclosure agreements (NDA):
   focuses on multi-vertical service aggregation, not proprietary backend internals. */

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
      viewBox="0 0 780 460"
      role="img"
      aria-labelledby="fennec-diagram-title fennec-diagram-desc"
      className={styles.svg}
    >
      <title id="fennec-diagram-title">
        Fennec Booking service integration architecture
      </title>
      <desc id="fennec-diagram-desc">
        High-level functional architecture showing web and mobile clients connected
        to a unified travel commerce engine integrating flights, hotels, transfers,
        eSIMs, e-visas, ferries, and secure payments with instant fulfillment.
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
        y={20}
        w={280}
        h={56}
        lines={["Web Application", "Customer portal & responsive booking flow"]}
      />
      <DiagramBox
        x={410}
        y={20}
        w={280}
        h={56}
        lines={["Mobile Application", "Cross-platform mobile booking client"]}
      />
      <Arrow x1={230} y1={76} x2={230} y2={108} />
      <Arrow x1={550} y1={76} x2={550} y2={108} />

      {/* Unified Platform Engine */}
      <DiagramBox
        x={90}
        y={110}
        w={600}
        h={62}
        variant="accent"
        lines={[
          "Unified Travel Platform & Integration Engine",
          "Single API layer · Real-time search, availability & pricing validation",
        ]}
      />

      {/* Integrated Verticals */}
      <text x={90} y={198} className={styles.groupLabel}>
        Integrated Travel Verticals &amp; Services
      </text>

      <Arrow x1={180} y1={172} x2={180} y2={208} />
      <Arrow x1={390} y1={172} x2={390} y2={208} />
      <Arrow x1={600} y1={172} x2={600} y2={208} />

      {/* Vertical Grid Row 1 */}
      <DiagramBox
        x={90}
        y={212}
        w={186}
        h={54}
        lines={["Flights", "Global inventory & ticketing"]}
      />
      <DiagramBox
        x={296}
        y={212}
        w={188}
        h={54}
        lines={["Hotels", "Worldwide rates & availability"]}
      />
      <DiagramBox
        x={504}
        y={212}
        w={186}
        h={54}
        lines={["Transfers", "Airport & city ground transit"]}
      />

      {/* Vertical Grid Row 2 */}
      <DiagramBox
        x={90}
        y={278}
        w={186}
        h={54}
        lines={["eSIMs", "Instant digital data packages"]}
      />
      <DiagramBox
        x={296}
        y={278}
        w={188}
        h={54}
        lines={["E-Visas", "Automated application pipeline"]}
      />
      <DiagramBox
        x={504}
        y={278}
        w={186}
        h={54}
        lines={["Packages & Ferries", "Vacation bundles & sea routes"]}
      />

      {/* Bottom Fulfillment & Payments */}
      <Arrow x1={235} y1={332} x2={235} y2={350} />
      <Arrow x1={545} y1={332} x2={545} y2={350} />

      <DiagramBox
        x={90}
        y={352}
        w={290}
        h={52}
        variant="muted"
        lines={[
          "Secure Payment Processing",
          "Local payment gateways & automated reconciliation",
        ]}
      />
      <DiagramBox
        x={400}
        y={352}
        w={290}
        h={52}
        variant="muted"
        lines={[
          "Instant Fulfillment",
          "Digital vouchers, ticketing & notification pipeline",
        ]}
      />

      {/* Caption */}
      <text x={390} y={434} textAnchor="middle" className={styles.caption}>
        Figure: Multi-vertical travel service integration architecture (sanitized per NDA).
      </text>
    </svg>
  );
}

export default FennecArchitecture;
