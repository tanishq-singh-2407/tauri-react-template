import { oak } from '../deps.ts';
import handlers from '../handler/index.ts';

const router = new oak.Router();

router.get("/", handlers.home);
router.get("/v1/:target/:arch/:current_version", handlers.v1.target_arch_version);

export default router;