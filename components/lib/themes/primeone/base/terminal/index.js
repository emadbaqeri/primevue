export default {
    css: `
.p-terminal {
    height: 18rem;
    overflow: auto;
    background: var(--p-terminal-background);
    color: var(--p-terminal-text-color);
    border: 1px solid var(--p-terminal-border-color);
    padding: 0.5rem 0.75rem;
    border-radius: var(--p-rounded-base);
}

.p-terminal-prompt-container {
    display: flex;
    align-items: center;
}

.p-terminal-input {
    flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt {
    margin-right: 0.25rem;
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-response {
    margin: 2px 0;
}
`
};