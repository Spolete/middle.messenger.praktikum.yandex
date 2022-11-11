import { Link } from './index';
import { expect } from 'chai';
import Router from '../../utils/chore/Router';
import sinon from 'sinon';
import {ProfilePage} from "../../pages/profile/modules/main";

describe('Link', () => {
    it('should render', () => {
        new Link({ to: '/' });
    });

    it('element should return span', () => {
        const link = new Link({ to: '/' });
        const element = link.getContent();

        expect(element).to.be.instanceof(window.HTMLSpanElement)
    });

    it('should go to passed route on click', () => {
        Router.use('/profile', ProfilePage);
        Router.start();
        const link = new Link({ to: '/' });
        const spy = sinon.spy(Router, 'go');
        const element = link.getContent() as HTMLSpanElement;

        element.click();

        expect(spy.calledOnce).to.eq(true);
    });
});
