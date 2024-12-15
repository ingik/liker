interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  className = '',
}: StepIndicatorProps) {
  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`relative flex items-center ${
            index === totalSteps - 1 ? '' : 'flex-1'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-colors duration-200 ${
              index < currentStep
                ? 'bg-primary'
                : index === currentStep
                ? 'bg-primary animate-pulse'
                : 'bg-background border border-primary/30'
            }`}
          />
          {index < totalSteps - 1 && (
            <div
              className={`h-0.5 flex-1 mx-2 transition-colors duration-200 ${
                index < currentStep ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
