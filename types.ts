export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface TriageResult {
  severity: 'low' | 'medium' | 'high' | 'emergency';
  summary: string;
  recommendation: string;
}

export enum AppState {
  CONSENT_PENDING = 'CONSENT_PENDING',
  INTAKE_ACTIVE = 'INTAKE_ACTIVE',
  SUMMARY_VIEW = 'SUMMARY_VIEW',
}
