// src/components/Badge.js
import React from 'react'

/**
 * Badge
 *
 * primary
 * secondary
 * success
 * info
 * warning
 * danger
 */

export function Badge({ children, type }) {
  return (
    <span className={`badge badge--${type}`}>{children}</span>
  );
}

export function BadgePill({ children, type }) {
  return (
    <span className={`badge badge--${type} badge--pill`}>{children}</span>
  );
}

export function BadgeLg({ children, type }) {
  return (
    <span className={`badge badge--${type} badge--lg`}>{children}</span>
  );
}

// Primary badge (blue) for required items
export function Required() {
  return (
    <span className="pill badge--danger">Required</span>
  );
}

// Secondary badge (gray) for optional/external
export function Optional() {
  return (
    <span className="pill badge--warning">Optional</span>
  );
}

export function External() {
  return (
    <span className="pill badge--warning">External</span>
  );
}
