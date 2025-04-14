/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Página HTML', () => {
  beforeEach(() => {
    // Cargar el archivo HTML en jsdom
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('Debe contener el título "¡Hola Mundo!"', () => {
    const greeting = document.getElementById('greeting');
    expect(greeting).not.toBeNull();
    expect(greeting.textContent).toBe('¡Hola Mundo!');
  });

  test('Debe contener un párrafo con texto sobre DevOps', () => {
    const paragraph = document.querySelector('p');
    expect(paragraph).not.toBeNull();
    expect(paragraph.textContent).toContain('DevOps');
  });
});