import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Adicionar 2 comentários', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('texta-comment'), {
            target: {
                value: 'Comentário 1',
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));


        fireEvent.change(screen.getByTestId('texta-comment'), {
            target: {
                value: 'Comentário 2',
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));

        expect(screen.getAllByTestId('li-comment')).toHaveLength(2);
    });

});