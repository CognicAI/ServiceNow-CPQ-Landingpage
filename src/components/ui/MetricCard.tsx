import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  description,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 ${className}`}>
      <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
};