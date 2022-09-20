import Home from './home.ts';
import v1__target_arch_version from './v1/[target][arch][version].ts';

const handlers = {
    home: Home,
    v1: {
        target_arch_version: v1__target_arch_version
    }
}

export default handlers;