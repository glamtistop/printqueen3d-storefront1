import { HttpTypes } from "@medusajs/types"
import React, { useState } from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
  variants?: HttpTypes.StoreProductVariant[]
  region?: HttpTypes.StoreRegion
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
  variants,
  region,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Check if this is a base/variant option (for accordion display)
  const isBaseOption = title.toLowerCase().includes('base') || 
                       title.toLowerCase().includes('option') ||
                       title.toLowerCase().includes('variant')

  // Helper to get price for a specific option value
  const getPriceForOption = (optionValue: string) => {
    if (!variants || !region) return null
    
    // Find a variant that has this option value
    const variant = variants.find((v) => 
      v.options?.some((opt) => opt.value === optionValue)
    )
    
    if (!variant) return null
    
    const amount = variant.calculated_price?.calculated_amount
    const currencyCode = variant.calculated_price?.currency_code
    
    if (amount === undefined || amount === null || !currencyCode) return null
    
    // Use the same formatting as the rest of the app - don't divide by 100
    // Medusa's calculated_amount is already in the correct format
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(amount)
  }

  return (
    <div className="flex flex-col gap-y-3">
      <label className="block text-sm font-semibold text-brand-navy">
        Select {title} <span className="text-brand-pink">*</span>
      </label>
      
      {!current && isBaseOption && (
        <p className="text-xs text-gray-500 mb-1">Click an option to select</p>
      )}
      {current && isBaseOption && (
        <div className="mb-2 p-2 bg-white rounded-lg border border-brand-cyan">
          <span className="text-sm font-medium text-brand-navy">
            Selected: {current}
          </span>
        </div>
      )}
      
      {isBaseOption ? (
        // Accordion for base options
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
            disabled={disabled}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-brand-navy">
                {title} <span className="text-brand-pink">*</span>
              </span>
              {current && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-brand-cyan">
                    {current}
                  </span>
                  {getPriceForOption(current) && (
                    <span className="text-sm font-bold text-brand-pink">
                      {getPriceForOption(current)}
                    </span>
                  )}
                </div>
              )}
              {!current && (
                <span className="text-xs text-gray-500">Click to select</span>
              )}
            </div>
            <svg 
              className={`w-5 h-5 text-brand-navy transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen && (
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-200">
              <div className="grid grid-cols-2 gap-3" data-testid={dataTestId}>
                {filteredOptions.map((v) => {
                  const isSelected = v === current
                  return (
                    <button
                      key={v}
                      onClick={() => {
                        updateOption(option.id, v)
                        setIsOpen(false)
                      }}
                      disabled={disabled}
                      className={`
                        p-4 rounded-xl border-2 transition-all text-left
                        ${isSelected 
                          ? 'border-brand-cyan bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 ring-2 ring-brand-cyan shadow-lg' 
                          : 'border-gray-300 bg-white hover:border-brand-cyan hover:shadow-md'
                        }
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                      data-testid="option-button"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          {/* Icon placeholder */}
                          <div className={`
                            w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0
                            ${isSelected ? 'bg-brand-cyan/20' : 'bg-gray-100'}
                          `}>
                            📦
                          </div>
                          
                          {/* Option text */}
                          <div className="flex-1">
                            <p className={`
                              text-sm font-semibold
                              ${isSelected ? 'text-brand-cyan' : 'text-brand-navy'}
                            `}>
                              {v}
                            </p>
                          </div>

                          {/* Checkmark for selected */}
                          {isSelected && (
                            <div className="w-6 h-6 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        {/* Price */}
                        {getPriceForOption(v) && (
                          <div className={`
                            text-lg font-bold ml-[60px]
                            ${isSelected ? 'text-brand-pink' : 'text-brand-orange'}
                          `}>
                            {getPriceForOption(v)}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Buttons for other options (sizes, etc.)
        <div
          className="flex flex-wrap gap-2"
          data-testid={dataTestId}
        >
          {filteredOptions.map((v) => {
            const isSelected = v === current
            return (
              <button
                onClick={() => updateOption(option.id, v)}
                key={v}
                className={`
                  px-4 py-2 rounded-lg border-2 font-medium transition-all
                  ${isSelected 
                    ? 'border-brand-cyan bg-brand-cyan text-white shadow-md' 
                    : 'border-gray-300 bg-white text-brand-navy hover:border-brand-cyan hover:shadow-md'
                  }
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
                disabled={disabled}
                data-testid="option-button"
              >
                {v}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default OptionSelect
