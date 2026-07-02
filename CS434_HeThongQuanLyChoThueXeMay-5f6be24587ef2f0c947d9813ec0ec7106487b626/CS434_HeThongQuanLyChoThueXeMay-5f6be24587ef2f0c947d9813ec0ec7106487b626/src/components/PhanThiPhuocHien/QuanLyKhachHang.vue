<template>
    <div>
        <!-- Shell Container -->
        <div class="flex h-screen w-full">
            <!-- Sidebar (Shared Component) -->
            <!-- Main Content Area -->
            <div class="space-y-xl">
                <!-- TopAppBar (Shared Component) -->
                <!-- Scrollable Content -->
                <div class="flex-1 overflow-y-auto p-margin-desktop custom-scrollbar bg-surface-container-lowest">
                    <!-- Page Header -->
                    <div class="mb-xl flex justify-between items-end">
                        <div>
                            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Quản lý Khách hàng</h2>
                            <p class="font-body-md text-body-md text-on-surface-variant">Quản lý thông tin và trạng thái tài khoản người dùng trong hệ thống.</p>
                        </div>
                        <div class="flex gap-md">
                            <button class="flex items-center gap-xs px-lg py-md border border-outline-variant rounded-xl hover:bg-surface transition-all text-label-md font-bold text-on-surface-variant">
                                <span class="material-symbols-outlined text-lg">file_download</span>
                                Export Data
                            </button>
                            <button class="flex items-center gap-xs px-lg py-md bg-primary text-on-primary rounded-xl hover:bg-primary/90 transition-all text-label-md font-bold shadow-md">
                                <span class="material-symbols-outlined text-lg">person_add</span>
                                Add Customer
                            </button>
                        </div>
                    </div>
                    <!-- Stats Bento Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                        <div class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span class="material-symbols-outlined">group</span>
                                </div>
                                <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Tổng Khách hàng</p>
                            <p class="text-3xl font-bold">1,284</p>
                        </div>
                        <div class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <span class="material-symbols-outlined">check_circle</span>
                                </div>
                                <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">94%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Đang Hoạt động</p>
                            <p class="text-3xl font-bold">1,210</p>
                        </div>
                        <div class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div class="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                                    <span class="material-symbols-outlined">lock</span>
                                </div>
                                <span class="text-xs font-bold text-error bg-error-container/10 px-2 py-1 rounded-full">6%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Đã Bị Khóa</p>
                            <p class="text-3xl font-bold">74</p>
                        </div>
                        <div class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div class="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                                    <span class="material-symbols-outlined">person_add</span>
                                </div>
                                <span class="text-xs font-bold text-tertiary bg-tertiary-fixed/10 px-2 py-1 rounded-full">New</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Tháng Này</p>
                            <p class="text-3xl font-bold">48</p>
                        </div>
                    </div>
                    <!-- Main Table Section -->
                    <div class="glass-card rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
                        <!-- Table Actions Header -->
                        <div class="p-lg border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-lg">
                            <div class="flex items-center gap-md w-full sm:w-auto">
                                <div class="relative w-full sm:w-80">
                                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
                                    <input class="w-full pl-10 pr-lg py-md bg-surface-container-lowest border border-outline-variant rounded-xl text-body-md focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Tìm theo tên, SĐT..." type="text"/>
                                </div>
                            </div>
                            <div class="flex items-center gap-md w-full sm:w-auto">
                                <select class="bg-surface-container-lowest border border-outline-variant rounded-xl px-lg py-md text-body-md font-medium min-w-[140px] focus:ring-primary/20 focus:border-primary">
                                    <option>Tất cả trạng thái</option>
                                    <option>Hoạt động</option>
                                    <option>Bị khóa</option>
                                </select>
                                <select class="bg-surface-container-lowest border border-outline-variant rounded-xl px-lg py-md text-body-md font-medium min-w-[140px] focus:ring-primary/20 focus:border-primary">
                                    <option>Thời gian: Mới nhất</option>
                                    <option>Thời gian: Cũ nhất</option>
                                </select>
                            </div>
                        </div>
                        <!-- Table Container -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-surface-container-low text-on-surface-variant uppercase tracking-wider font-bold text-[11px]">
                                        <th class="px-lg py-md border-b border-outline-variant">Avatar</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Họ và tên</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Số điện thoại</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Email</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Trạng thái</th>
                                        <th class="px-lg py-md border-b border-outline-variant text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-outline-variant/50">
                                    <!-- Row 1 -->
                                    <tr class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                                                <img class="w-full h-full object-cover" data-alt="A portrait of a young Vietnamese professional woman, smiling warmly, stylish glasses, wearing a smart casual blazer. Soft natural window lighting, clean office background, vibrant but professional colors, high-resolution photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr5iCDD1WNsdUeJ5rEXt-10sjKdu1A9oFJ5B9mI-uMjHC2_5ogIca24oUWjOKGPYIiKZjxWCwTq8Qm_dHXVmTP0pUt6-WxlMT4jg2fnl5pTRAE-d-NEvaimP3XX1z6Nnqn0oN_vm_RkWYY07gNJp_YPxKTaMXwtPVM2qIQhVr5dXFSyGo-oVXQm7L65HJkEGFFEiuPHySokUsEUe2o1c7NxRfgQh1krEBp9ISudFY_6qveiK0JZ3JCjKZz-VPt_3vuSNpFFZVzqHmr"/>
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">Nguyễn Minh Anh</div>
                                            <div class="text-xs text-on-surface-variant">ID: MR-10293</div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">0912 345 678</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">minhanh.ng@gmail.com</td>
                                        <td class="px-lg py-lg">
                                            <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                                </span>
                                                Hoạt động
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all" title="Khóa tài khoản">
                                                    <span class="material-symbols-outlined text-lg">lock</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 2 -->
                                    <tr class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                                                <img class="w-full h-full object-cover" data-alt="Close-up portrait of a professional man in his 30s, energetic look, wearing a tech-startup polo shirt. High-quality lighting, shallow depth of field with a modern urban background. The style is clean, premium, and trustworthy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLI5AvoBkzOma7fgGTe4AZFvttn8xV81QJrOP4qL1Dt1BCt4-55z--mfo_wHAbsNtCVc1xlbyDTbij4KRnwBx3gl5InQiiKLfzveg2Be7O2vOHi7ZFDmBmUcWTkB7gtNZlQo3R91XFAvKR7PsKE52FOSf7mxaCkuwRCu6p1shG9Zu0zzQdTQw6JIXwilGE6HADNW143YLOQmeuGGZxEIFhDP46N-6InlTbTc30aBsNp2bIcHE-lrhDKBw_AWuLY5dArdGJFI_bH8Z"/>
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">Trần Hoàng Long</div>
                                            <div class="text-xs text-on-surface-variant">ID: MR-10344</div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">0988 123 456</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">longth_92@yahoo.com</td>
                                        <td class="px-lg py-lg">
                                            <span class="inline-flex items-center gap-1 px-3 py-1 bg-error-container/30 text-error rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-error">
                                                </span>
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button class="p-2 text-on-surface-variant hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Mở khóa">
                                                    <span class="material-symbols-outlined text-lg">lock_open</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 3 -->
                                    <tr class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                                                <img class="w-full h-full object-cover" data-alt="Portrait of a friendly looking male customer in casual travel attire, adventure-ready look. Soft, warm sunlight, scenic coastal highway background blurred. Professional travel photography style with a light-mode color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Oy-uMbYzPl3pS7pROXXjI7nOcVYsq_klYhYJEhonLEKIuHvI0fhnm17N1vcIIUhVksDbiEAbnlWRFMLRYrxBdWp8rlBjJJT3lxxc-6_leFAaWpTSkjEtaHA1xiOPp8b8yiDXTUcpAJinMFZ-G-plk9GZg7ymyMPzGvJfZ9sbUK5Xw3iziIgJEDGvqYk1YDhf3aF2qVoMYEB5UMjNlJ6Bhd16tbjDKB9Q7FcgD-k5Y6l0jutQ3DGU7YpgLzlpqLMQQhK7e3mT6RPl"/>
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">Lê Văn Hùng</div>
                                            <div class="text-xs text-on-surface-variant">ID: MR-10421</div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">0903 555 999</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">hung.vanle@outlook.com</td>
                                        <td class="px-lg py-lg">
                                            <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                                </span>
                                                Hoạt động
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all" title="Khóa tài khoản">
                                                    <span class="material-symbols-outlined text-lg">lock</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 4 -->
                                    <tr class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                                                <img class="w-full h-full object-cover" data-alt="Professional portrait of a mature female client, confident and sophisticated, wearing designer eyewear. High-end lifestyle photography, soft bokeh background with modern architectural details. Light-mode aesthetic with clean white and blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZdU7jCxS1WQq3v0UkMUzZnT2vngFxRBO4j1acjHt9-09WI1Bx04pjdYBcwiqlqAwmBVQWu_0rsf3KGbSodTyyfFzQURGh4WefjsX9XxXAQviLt1f-xijs7ZNeLuuF0BPA9Xsbau89SGzM8QVp9v3AzOOfrMv4tP2drJv3EZ7warePwaBgNPBFiLZX8SSG9H9woBGZssSD29i6L13IsDyZWkHOLjfmEeJ0pq5jRkFJAHUNsPlGAFSPmSyikK3SfRr-WlssHJB8mjN"/>
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">Phạm Thanh Thảo</div>
                                            <div class="text-xs text-on-surface-variant">ID: MR-10512</div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">0934 888 222</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">thao.pham@gmail.com</td>
                                        <td class="px-lg py-lg">
                                            <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                                </span>
                                                Hoạt động
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all" title="Khóa tài khoản">
                                                    <span class="material-symbols-outlined text-lg">lock</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 5 -->
                                    <tr class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                                                <img class="w-full h-full object-cover" data-alt="Cheerful young man, trendy hairstyle, wearing a stylish denim jacket. Bright daylight photography, outdoor urban cafe setting, high clarity and vibrant but realistic color saturation. Professional portraiture style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnAsuNPzwtOssxqiJZhNo4O7SYxvdLZpiq3dSHe48fTH7-c2MN3T9COF0QTFm-nb3NGaQ2pESWeLlFrN0JhLNf6NoBv32ONBZPd8ZdghtWDq9QECsuuecVyE7PAogmeY_mVywONFcyFTa-Iafx6fJzRvWHgyMi8GEvEJwP_E3qZMkGQqgFnh2oBGw-7k2D-eRM43_zUVVuXqhLCqs-Wo23g8d_2kuav2PBfotiU609byzDCFuMKrdWBS3Yp7mHcnO5y7Leu6uO_dcA"/>
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">Đỗ Quốc Bảo</div>
                                            <div class="text-xs text-on-surface-variant">ID: MR-10655</div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">0977 444 333</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">baodo@live.com</td>
                                        <td class="px-lg py-lg">
                                            <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-green-500">
                                                </span>
                                                Hoạt động
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all" title="Khóa tài khoản">
                                                    <span class="material-symbols-outlined text-lg">lock</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Pagination -->
                        <div class="p-lg flex flex-col sm:flex-row justify-between items-center gap-lg bg-surface-container-low border-t border-outline-variant">
                            <p class="text-body-md text-on-surface-variant">Hiển thị <span class="font-bold text-on-surface">1 - 5</span> của <span class="font-bold text-on-surface">1,284</span> khách hàng</p>
                            <div class="flex items-center gap-xs">
                                <button class="p-2 rounded-lg border border-outline-variant hover:bg-surface transition-all disabled:opacity-50" disabled="">
                                    <span class="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold shadow-sm">1</button>
                                <button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-all text-on-surface font-medium">2</button>
                                <button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-all text-on-surface font-medium">3</button>
                                <span class="px-2 text-on-surface-variant">...</span>
                                <button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-all text-on-surface font-medium">257</button>
                                <button class="p-2 rounded-lg border border-outline-variant hover:bg-surface transition-all">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Micro-interactions Script -->
    </div>
</template>

<script>
export default {
    name: 'QuanLyKhachHang',
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            // Dropdown & Filter simulated functionality
            const selectElements = document.querySelectorAll('select');
            selectElements.forEach(select => {
                select.addEventListener('change', (e) => {
                    console.log('Filter applied:', e.target.value);
                    // Add visual feedback or loading state simulation here
                });
            });
        
            // Action button feedback
            const actionButtons = document.querySelectorAll('button[title]');
            actionButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const action = btn.getAttribute('title');
                    const userName = btn.closest('tr').querySelector('.font-bold').innerText;
                    console.log(`${action} for ${userName}`);
                    // Trigger modal or toast here
                });
            });
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}
.active-tab {
    background: #E5E7EB;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}
</style>
