<template>
    <div>
        <!-- SideNavBar (Prebuilt Logic) -->
        <!-- TopNavBar (Prebuilt Logic) -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- Page Title & Quick Actions -->
            <div class="flex justify-between items-end mb-xl">
                <div>
                    <h2 class="font-headline-lg text-headline-lg text-on-surface">Tổng quan hệ thống</h2>
                    <p class="font-body-md text-body-md text-outline">Cập nhật lúc 09:41 AM, Hôm nay</p>
                </div>
                <div class="flex gap-md">
                    <button class="flex items-center gap-2 px-md py-2 bg-surface border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all">
                        <span class="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Xuất báo cáo
                    </button>
                </div>
            </div>
            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                <!-- Revenue -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-primary/10 rounded-xl text-primary">
                            <span class="material-symbols-outlined" data-icon="payments">payments</span>
                        </div>
                        <span class="text-[12px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Doanh thu</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">128.5M <span class="text-body-md font-medium text-outline">VNĐ</span>
                    </p>
                    <div class="mt-md h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full" style="width: 75%">
                        </div>
                    </div>
                </div>
                <!-- Customers -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-secondary/10 rounded-xl text-secondary">
                            <span class="material-symbols-outlined" data-icon="person_add">person_add</span>
                        </div>
                        <span class="text-[12px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Khách hàng</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">2,840</p>
                    <p class="text-[12px] text-outline mt-sm">Khách hàng mới trong tháng</p>
                </div>
                <!-- Vehicles -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-purple-100 rounded-xl text-purple-600">
                            <span class="material-symbols-outlined" data-icon="two_wheeler">two_wheeler</span>
                        </div>
                        <span class="text-[12px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">95%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Xe hoạt động</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">486</p>
                    <p class="text-[12px] text-outline mt-sm">Trên tổng số 512 xe</p>
                </div>
                <!-- Rentals -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-orange-100 rounded-xl text-orange-600">
                            <span class="material-symbols-outlined" data-icon="assignment_turned_in">assignment_turned_in</span>
                        </div>
                        <span class="text-[12px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">+8%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Đơn thuê</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">84</p>
                    <p class="text-[12px] text-outline mt-sm">Đơn hàng phát sinh hôm nay</p>
                </div>
            </div>
            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
                <!-- Revenue Trend Chart -->
                <div class="glass-card p-xl rounded-2xl shadow-sm">
                    <div class="flex justify-between items-center mb-xl">
                        <h3 class="font-title-lg text-title-lg text-on-surface">Xu hướng doanh thu</h3>
                        <select class="bg-surface-container-low border-outline-variant rounded-lg text-label-sm focus:ring-primary outline-none">
                            <option>7 ngày qua</option>
                            <option>30 ngày qua</option>
                            <option>Trong năm</option>
                        </select>
                    </div>
                    <div class="relative h-[280px] w-full flex items-end justify-between px-2 overflow-hidden">
                        <!-- Simple visualization representing a line chart with area fill -->
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent">
                        </div>
                        <div class="flex-1 h-[40%] bg-primary/20 mx-1 rounded-t-lg relative group transition-all hover:h-[45%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">12M</div>
                        </div>
                        <div class="flex-1 h-[60%] bg-primary/40 mx-1 rounded-t-lg relative group transition-all hover:h-[65%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">18M</div>
                        </div>
                        <div class="flex-1 h-[55%] bg-primary/60 mx-1 rounded-t-lg relative group transition-all hover:h-[60%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">16M</div>
                        </div>
                        <div class="flex-1 h-[80%] bg-primary/80 mx-1 rounded-t-lg relative group transition-all hover:h-[85%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">24M</div>
                        </div>
                        <div class="flex-1 h-[70%] bg-primary/90 mx-1 rounded-t-lg relative group transition-all hover:h-[75%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">21M</div>
                        </div>
                        <div class="flex-1 h-[95%] bg-primary mx-1 rounded-t-lg relative group transition-all hover:h-[100%]">
                            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">28M</div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-md px-2 text-label-sm text-outline">
                        <span>Thứ 2</span>
                        <span>Thứ 3</span>
                        <span>Thứ 4</span>
                        <span>Thứ 5</span>
                        <span>Thứ 6</span>
                        <span>Thứ 7</span>
                    </div>
                </div>
                <!-- Vehicle Distribution Chart -->
                <div class="glass-card p-xl rounded-2xl shadow-sm">
                    <div class="flex justify-between items-center mb-xl">
                        <h3 class="font-title-lg text-title-lg text-on-surface">Phân bố loại xe</h3>
                        <button class="text-primary hover:underline text-label-sm">Xem chi tiết</button>
                    </div>
                    <div class="flex flex-col gap-lg h-[280px] justify-center">
                        <div class="space-y-sm">
                            <div class="flex justify-between font-label-md mb-1">
                                <span>Scooter (Xe tay ga)</span>
                                <span class="font-bold">45%</span>
                            </div>
                            <div class="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                                <div class="h-full bg-primary rounded-full transition-all duration-700" style="width: 45%">
                                </div>
                            </div>
                        </div>
                        <div class="space-y-sm">
                            <div class="flex justify-between font-label-md mb-1">
                                <span>Sport (Xe thể thao)</span>
                                <span class="font-bold">30%</span>
                            </div>
                            <div class="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                                <div class="h-full bg-secondary rounded-full transition-all duration-700" style="width: 30%">
                                </div>
                            </div>
                        </div>
                        <div class="space-y-sm">
                            <div class="flex justify-between font-label-md mb-1">
                                <span>Cruiser (Xe đường trường)</span>
                                <span class="font-bold">25%</span>
                            </div>
                            <div class="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                                <div class="h-full bg-purple-500 rounded-full transition-all duration-700" style="width: 25%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-md text-[12px] text-outline-variant italic">Dữ liệu tính trên số lượng đơn thuê thành công</div>
                </div>
            </div>
            <!-- Recent Orders Table -->
            <section class="glass-card rounded-2xl shadow-sm overflow-hidden mb-xl">
                <div class="p-xl border-b border-outline-variant flex justify-between items-center">
                    <h3 class="font-title-lg text-title-lg text-on-surface">Đơn hàng gần đây</h3>
                    <div class="flex gap-md">
                        <div class="relative">
                            <span class="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[18px]" data-icon="filter_list">filter_list</span>
                            <select class="pl-8 pr-md py-1.5 bg-surface-container-low border border-outline-variant rounded-lg text-label-sm outline-none">
                                <option>Tất cả trạng thái</option>
                                <option>Hoàn thành</option>
                                <option>Đang thuê</option>
                                <option>Chờ duyệt</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto scroll-hide">
                    <table class="w-full text-left">
                        <thead class="bg-surface-container-low/50">
                            <tr>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Mã đơn</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Khách hàng</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Xe</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Ngày thuê</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Tổng tiền</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Trạng thái</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/30">
                            <!-- Row 1 -->
                            <tr class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-xl py-lg font-label-md text-label-md text-primary font-bold">#ORD-2849</td>
                                <td class="px-xl py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="Close-up portrait of a cheerful Vietnamese woman with short dark hair, wearing a white modern linen shirt. Soft, natural sunlight illuminates her face against a minimalist aesthetic background, conveying trust and premium customer profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlF3VhB9jpW3V3VI_W63FxT-f8DEkSwbzK3kVkF7sgyaJUlGjyLnrPurCJjK5BAoIy-DK02vxrNibjYk5tGVbeAqiN8CoYSLPdhuWY42IAax1wrbNzv0bW0r3Y20TqO15Zt7MthktPDGEvkYlWv8wwkvhr6Ur1L6YF5JhfXrubRqVXCIULmVQMJq05vnK9-XflNVO-tczVMywSAgbSwJOW_Sw4tFWaS8a_QUiYdKnbttyG8Dz0b4YJIJ0sRCb2SEGEpj-1dQUxnfHR"/>
                                        </div>
                                        <span class="font-body-md text-body-md text-on-surface">Nguyễn Văn An</span>
                                    </div>
                                </td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">Honda SH 150i</td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">12/05/2024</td>
                                <td class="px-xl py-lg font-label-md text-label-md text-on-surface font-semibold">1,200,000 đ</td>
                                <td class="px-xl py-lg">
                                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[12px] font-bold">Hoàn thành</span>
                                </td>
                                <td class="px-xl py-lg text-right">
                                    <button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-container-high rounded-lg">
                                        <span class="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 2 -->
                            <tr class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-xl py-lg font-label-md text-label-md text-primary font-bold">#ORD-2850</td>
                                <td class="px-xl py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="High-detail close-up shot of a sophisticated man with a well-groomed beard, wearing a navy blue blazer. The atmosphere is professional and stylish, with a background consisting of a modern, slightly blurred glass architecture building under daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1CZc_z9eHcxbek9ylOPLKYQO5wjb_hO-jfKNSuMvN_s028pPxy7Sjun-YnAA3ha5d9NgRig58ZKPchCc7LRAwvGQ8ZPLhxaDOlfWUKgX6udS66_b60hef3Seo4ZPNIygYNkhMdEQXBBa7cJEiTKHR1E9KYtgW5AelDsgFJ--sKWzH0nQo2hvY55rqgBdRTKrWSaDo2o0zKVgSNaBHIEy4lwFjstYu_fSwQIpfqwmrNIQfEyc2hxXdlVUFCMr2bE10lD-kUReeWjav"/>
                                        </div>
                                        <span class="font-body-md text-body-md text-on-surface">Trần Minh Tâm</span>
                                    </div>
                                </td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">Yamaha Exciter 155</td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">15/05/2024</td>
                                <td class="px-xl py-lg font-label-md text-label-md text-on-surface font-semibold">850,000 đ</td>
                                <td class="px-xl py-lg">
                                    <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-[12px] font-bold">Đang thuê</span>
                                </td>
                                <td class="px-xl py-lg text-right">
                                    <button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-container-high rounded-lg">
                                        <span class="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 3 -->
                            <tr class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-xl py-lg font-label-md text-label-md text-primary font-bold">#ORD-2851</td>
                                <td class="px-xl py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A trendy young traveler in a leather jacket holding a motorcycle helmet, looking into the distance with a confident smile. The scene is shot in a cinematic style with warm golden hour light hitting his face and a sleek motorbike in the soft background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8yLi3ayWcvZisxScBgnSNDajVtIwFc4PYzuBHlBxmSh5zIDOwuROlxYP8hrw8B4diLUmvM-kXZo0k4q3rNEKQgzZId8Ell8TraxsJfsf8mSL3BZrN6TRNRpwIIklOaw7yEviU9MYGJ10L0F0uDlZwJJeVPF1iDka7WLMBYmTgovPuBNWq8V3X7XL40IRI2Rd7EkY24xND2_UZZakbouI8Y32UuwXGHy48_E7l4Me2htGJhfbfZAD7yl5j0fSbjF79XmqEzVt7c0Dn"/>
                                        </div>
                                        <span class="font-body-md text-body-md text-on-surface">Lê Thị Hoa</span>
                                    </div>
                                </td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">Vespa Primavera</td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">18/05/2024</td>
                                <td class="px-xl py-lg font-label-md text-label-md text-on-surface font-semibold">2,500,000 đ</td>
                                <td class="px-xl py-lg">
                                    <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[12px] font-bold">Chờ duyệt</span>
                                </td>
                                <td class="px-xl py-lg text-right">
                                    <button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-container-high rounded-lg">
                                        <span class="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-lg bg-surface-container-low/30 border-t border-outline-variant flex justify-between items-center">
                    <span class="text-label-sm text-outline">Hiển thị 10 trong tổng số 1,250 đơn hàng</span>
                    <div class="flex gap-2">
                        <button class="px-3 py-1 bg-surface border border-outline-variant rounded hover:bg-surface-container-high transition-all text-label-sm">Trước</button>
                        <button class="px-3 py-1 bg-primary text-on-primary rounded text-label-sm">1</button>
                        <button class="px-3 py-1 bg-surface border border-outline-variant rounded hover:bg-surface-container-high transition-all text-label-sm">2</button>
                        <button class="px-3 py-1 bg-surface border border-outline-variant rounded hover:bg-surface-container-high transition-all text-label-sm">Tiếp</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    mounted() {
        // Micro-interactions and effects
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.scroll-hide::-webkit-scrollbar { display: none; }
</style>
