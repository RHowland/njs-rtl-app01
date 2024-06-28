import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('should have Learn more text', () => {
	render(<Home />);
	const headerText = expect(screen.getByText('Learn more'));
	headerText.toBeInTheDocument();
});
