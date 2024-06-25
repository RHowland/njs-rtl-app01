import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('should have Discover text', () => {
	render(<Home />);
	const headerText = expect(screen.getByText('Discover'));
	headerText.toBeInTheDocument();
});
