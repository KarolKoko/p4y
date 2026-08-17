import React, { useState } from 'react'
import styled, { type CSSProperties } from 'styled-components'

const StyledContactFormWrapper = styled.div`
    padding: 30px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: 1px solid #ddd;
    background-color: #000000b2;
    width: 800px;
`

const labelStyle: CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255, 255, 255, 0.99)',
    marginBottom: 6,
}

const inputStyle: CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 8,
    border: '1.5px solid rgba(255,255,255,0.18)',
    background: 'rgb(255, 255, 255)',
    color: '#000000',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
}

const ContactForm: React.FC = () => {

    const [formState, setFormState] = useState<{ name: string, email: string, company: string, message: string }>({
        name: '',
        email: '',
        company: '',
        message: '',
    })

    return (
        <StyledContactFormWrapper>
            <form onSubmit={() => { }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                        <label style={labelStyle}>Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Jane Smith"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Company</label>
                        <input
                            type="text"
                            placeholder="Acme Inc."
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div>
                    <label style={labelStyle}>Email</label>
                    <input
                        required
                        type="email"
                        placeholder="jane@acme.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your fulfillment needs — product types, monthly order volume, destination markets…"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55 }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '13px 24px',
                        borderRadius: 8,
                        border: 'none',
                        background: 'linear-gradient(135deg, #3a6fe8, #1a4fd4)',
                        color: '#ffffff',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: 700,
                        fontSize: 14,
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(30,80,220,0.45)',
                        transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                    Send message →
                </button>

                <p
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 12,
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginTop: -4,
                    }}
                >
                    We typically respond within one business day.
                </p>
            </form>
        </StyledContactFormWrapper>
    )
}

export default ContactForm
