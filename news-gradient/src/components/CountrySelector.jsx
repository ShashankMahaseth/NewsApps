import React from 'react';

const countries = [
    { code: 'us', name: 'USA' },
    { code: 'in', name: 'India' },
    { code: 'gb', name: 'UK' },
    { code: 'au', name: 'Australia' },
    { code: 'ca', name: 'Canada' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'br', name: 'Brazil' },
    { code: 'ru', name: 'Russia' },
    { code: 'cn', name: 'China' },
    { code: 'es', name: 'Spain' },
    { code: 'it', name: 'Italy' }
];

const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
    return (
        <div className="country-selector-container">
            <div className="country-list">
                {countries.map((country) => (
                    <button
                        key={country.code}
                        className={`country-item ${selectedCountry === country.code ? 'active' : ''}`}
                        onClick={() => onSelectCountry(country.code)}
                    >
                        <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            alt={country.name}
                            className="country-flag"
                            loading="lazy"
                        />
                        <span className="country-name">{country.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CountrySelector;
