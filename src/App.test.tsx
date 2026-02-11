import App from "./App";
import { render, screen } from "@testing-library/react";

describe('First Test', () => {
  it('should render the App component', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });

  it("should display the title 'Busca de Livros'", () => {
    render(<App />);

    const title = screen.getByText("Busca de Livros");
    expect(title).toBeInTheDocument();
  });
});