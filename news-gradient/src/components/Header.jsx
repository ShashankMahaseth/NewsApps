import React from 'react';
import { Newspaper } from 'lucide-react';

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-content">
                <div className="logo-container">
                    <Newspaper size={32} className="logo-icon" />
                    <h1 className="app-title">Daily<span className="gradient-text">News</span></h1>
                </div>
                <p className="app-subtitle">Global Headlines, Beautifully Delivered</p>
            </div>
        </header>
    );
};

export default Header;
