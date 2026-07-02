<template>
    <div>
        <!-- SideNavBar (Authority: JSON) -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- TopNavBar (Authority: JSON) -->
            <!-- Page Content -->
            <div class="p-margin-desktop space-y-lg flex-1">
                <!-- Dashboard Header Section -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-md">
                    <div>
                        <nav class="flex items-center gap-xs text-label-sm text-on-surface-variant mb-xs">
                            <span>Hệ thống</span>
                            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span class="text-primary font-semibold">Quản lý Xe</span>
                        </nav>
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Quản lý Xe</h2>
                        <p class="text-body-md text-on-surface-variant mt-xs">Quản lý đội xe MotoRent Pro của bạn từ một nơi duy nhất.</p>
                    </div>
                    <div class="flex items-center gap-sm">
                        <button class="flex items-center gap-sm px-lg h-12 bg-surface border border-outline-variant text-on-surface-variant rounded-xl font-label-md hover:bg-surface-container-high transition-standard active:scale-95">
                            <span class="material-symbols-outlined">filter_list</span>
                            Bộ lọc
                        </button>
                        <button class="flex items-center gap-sm px-lg h-12 bg-primary text-on-primary rounded-xl font-label-md hover:shadow-lg hover:shadow-primary/20 transition-standard active:scale-95">
                            <span class="material-symbols-outlined">add</span>
                            Thêm Xe Mới
                        </button>
                    </div>
                </div>
                <!-- Vehicle Table Card -->
                <div class="glass-card rounded-2xl overflow-hidden shadow-sm">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant/30">
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Ảnh</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Tên Xe</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Biển số</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Danh mục</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Giá thuê (ngày)</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Trạng thái</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant text-right">Hành động</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/20">
                                <!-- Row 1 -->
                                <tr class="hover:bg-surface-container-low/50 transition-standard group">
                                    <td class="px-lg py-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A sleek, modern high-performance sport motorcycle, possibly a Ducati or BMW, photographed in a clean, minimalist studio setting with bright high-key lighting. The bike is dark metallic gray with vibrant blue accents that match the primary UI color. 8k resolution, sharp focus, professional automotive photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCLpnetrTPoeSz1i9LeoG3ns1gKof_oH9zca0WIFx2wxJlX3PK4iw_HubHu5y-WLUv1-TjmZ0pRrTD-l_x3WqmLz35rbHhyVZQyYvl_pI9OcBW7LD0xQspmOLJ1Av16FUBMaJrreZx52GU4ylPtoWN0_miK8K0f02mUWaBkS3F5iaDVA4Q7jeHGPn6drgbIjjrfpNi-nMj6tZrR3naPDbuE4Im8_FdAweRRQ780B92WAJ0OELu4xyt63YSONEZHsaZGvxDF8fQ2OcE"/>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">Kawasaki Z900 RS</td>
                                    <td class="px-lg py-md font-body-md text-on-surface-variant">59-A3 888.88</td>
                                    <td class="px-lg py-md">
                                        <span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container text-label-sm rounded-full">Naked Bike</span>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">1,200,000đ</td>
                                    <td class="px-lg py-md">
                                        <span class="inline-flex items-center gap-xs px-sm py-xs bg-green-100 text-green-700 text-label-sm rounded-full">
                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                            </span>
                                            Sẵn sàng
                                        </span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <div class="flex items-center justify-end gap-xs">
                                            <button class="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button class="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 2 -->
                                <tr class="hover:bg-surface-container-low/50 transition-standard group">
                                    <td class="px-lg py-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A premium adventure touring motorcycle, like a Honda Africa Twin or BMW GS, shown in a clean studio environment. The bike is white with blue and red details, fitting a professional rental fleet aesthetic. Lighting is soft and bright, creating a clean light-mode look. Ultra-high definition detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqmx20gm-ZhtLUz98gofcQB7PjsvWr6W4Ldgdo4TnJiU1oKY2022ingCd-bPJzS0O2t9LgrKQ3iImZ8Ha1F1FVQqYmse59joL3iX64eqbpW9KjIrn_fZgdzH-vl7nE33Ad1xfCKH-cU7EZ-gbmTKHyNknc2ygm2q6i2GmsnJ6IAIcw-Tiv7QZIToBPQNGshO-NEAbzMSduYLhBzS_slhOYQTqqGllXNTC7k0UM8xDqVvw0LOaL1_pSJXO43EjR4s3GEWfUPXiqefU"/>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">Honda Africa Twin</td>
                                    <td class="px-lg py-md font-body-md text-on-surface-variant">29-B1 123.45</td>
                                    <td class="px-lg py-md">
                                        <span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container text-label-sm rounded-full">Adventure</span>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">1,800,000đ</td>
                                    <td class="px-lg py-md">
                                        <span class="inline-flex items-center gap-xs px-sm py-xs bg-blue-100 text-blue-700 text-label-sm rounded-full">
                                            <span class="w-1.5 h-1.5 rounded-full bg-blue-500">
                                            </span>
                                            Đang thuê
                                        </span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <div class="flex items-center justify-end gap-xs">
                                            <button class="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button class="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 3 -->
                                <tr class="hover:bg-surface-container-low/50 transition-standard group">
                                    <td class="px-lg py-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A classic retro-style motorcycle, such as a Triumph Bonneville or Royal Enfield Continental GT, in a bright studio. The bike is chrome and black, reflecting soft studio lights. The aesthetic is clean, sophisticated, and premium, suitable for a high-end bike management system. 8k, crisp edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBosfqiKAXv8PtJa7m49-q10pjCSpwqQs88FKStYVI38WD1eMdlxbacz7sBMY_SwPlCz4wUApAJAyOiypjR95F-DZbtNGv986SB5sfD9-thKWX5bSc1wbLhCQRDiDnBn9C8o0yZt5Imz0H2_3omNGzjw_EY9D2lpOIemk1Lqr894KgSXfbHPPxhjix6EOO4fOHT6dIZt8nP0YKDF7iuSj5J5oCqdxbDUbg4EAoF2BzKdQrBUbOD3zRoPy9tfZiymWNTG5g6E_Lz5zFt"/>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">Royal Enfield 650</td>
                                    <td class="px-lg py-md font-body-md text-on-surface-variant">43-C1 567.89</td>
                                    <td class="px-lg py-md">
                                        <span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container text-label-sm rounded-full">Classic</span>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">900,000đ</td>
                                    <td class="px-lg py-md">
                                        <span class="inline-flex items-center gap-xs px-sm py-xs bg-orange-100 text-orange-700 text-label-sm rounded-full">
                                            <span class="w-1.5 h-1.5 rounded-full bg-orange-500">
                                            </span>
                                            Bảo trì
                                        </span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <div class="flex items-center justify-end gap-xs">
                                            <button class="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button class="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 4 -->
                                <tr class="hover:bg-surface-container-low/50 transition-standard group">
                                    <td class="px-lg py-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A futuristic electric urban scooter with a minimalist design, colored in matte white and soft gray. Photographed in a clean, high-brightness studio. The image reflects a forward-looking, 2026-standard mobility platform. Sharp focus, smooth gradients, premium look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiVTPaPTJvHkBJkmk9jhzEC-gDyQsuNeVPc5fNZXBfEVhzW9L8iZCmwKMgyXW8wzaRtQfmjXx3nXNH3kN50CvyrxWCJaw0o4TiczzTokbHO3a-aNofgkadZw8ZkPijgSQ0sJHOuZOaM1eBoqqggp1rYh_NbbkJoV3ZW5P1ghDzptW0ihWXlFWv_SVrS4V2Q3vezqksTeygLZwpmGqHjIp0Tjw7ZHU_F78hkL1Af3HELCa9xfd9MYjlfFxBs6QPyVeNV_Bjy4taW4zp"/>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">VinFast Theon S</td>
                                    <td class="px-lg py-md font-body-md text-on-surface-variant">51-F2 246.80</td>
                                    <td class="px-lg py-md">
                                        <span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container text-label-sm rounded-full">Electric</span>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">500,000đ</td>
                                    <td class="px-lg py-md">
                                        <span class="inline-flex items-center gap-xs px-sm py-xs bg-green-100 text-green-700 text-label-sm rounded-full">
                                            <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                            </span>
                                            Sẵn sàng
                                        </span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <div class="flex items-center justify-end gap-xs">
                                            <button class="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button class="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination Footer -->
                    <div class="px-lg py-md bg-surface-container-lowest border-t border-outline-variant/30 flex items-center justify-between">
                        <p class="text-body-md text-on-surface-variant">Hiển thị <span class="font-semibold text-on-surface">1-10</span> trong số <span class="font-semibold text-on-surface">42</span> xe</p>
                        <div class="flex items-center gap-xs">
                            <button class="p-2 text-outline hover:bg-surface-container-high rounded-lg transition-standard disabled:opacity-30" disabled="">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button class="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-lg font-label-md">1</button>
                            <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md">2</button>
                            <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md">3</button>
                            <span class="px-2 text-outline">...</span>
                            <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md">5</button>
                            <button class="p-2 text-outline hover:bg-surface-container-high rounded-lg transition-standard">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Bento Stats Section -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                    <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">motorcycle</span>
                            </span>
                            <span class="text-green-600 text-label-sm font-bold flex items-center gap-xs">+12% <span class="material-symbols-outlined text-[14px]">trending_up</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <p class="text-on-surface-variant font-label-md">Tổng Đội Xe</p>
                        <h3 class="text-display-sm font-display-sm text-on-surface">148</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <p class="text-on-surface-variant font-label-md">Đang Hoạt Động</p>
                        <h3 class="text-display-sm font-display-sm text-on-surface">112</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">key</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <p class="text-on-surface-variant font-label-md">Đang Cho Thuê</p>
                        <h3 class="text-display-sm font-display-sm text-on-surface">86</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">build</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <p class="text-on-surface-variant font-label-md">Đang Bảo Trì</p>
                        <h3 class="text-display-sm font-display-sm text-on-surface">12</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Bottom NavBar (Authority: CSS/Rule Logic) -->
    </div>
</template>

<script>
export default {
    name: 'QuanLyXe',
    mounted() {
        // Simple Micro-interactions
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => btn.classList.add('scale-95'));
            btn.addEventListener('mouseup', () => btn.classList.remove('scale-95'));
            btn.addEventListener('mouseleave', () => btn.classList.remove('scale-95'));
        });
        
        // Hover effect for table rows
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.transform = 'translateX(4px)';
            });
            row.addEventListener('mouseleave', () => {
                row.style.transform = 'translateX(0)';
            });
        });
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    background-color: #faf8ff;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.transition-standard {
    transition: all 200ms ease-in-out;
}
/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #c3c6d7;
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: #737686;
}
</style>
