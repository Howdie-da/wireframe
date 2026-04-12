import { forwardRef, useId } from "react"

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    
  return (
    <div className="w-full">
        {label && (
            <label 
                htmlFor={id} 
                className="inline-block mb-1.5 pl-1 text-sm font-semibold"
            >
                {label}
            </label>
        )}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2.5 rounded-lg bg-white text-gray-900 outline-none border border-gray-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all duration-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)