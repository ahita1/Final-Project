from django.db import models
from users.models import CustomUser
from django.utils import timezone


class Category(models.Model):
    ca_id = models.AutoField(primary_key=True)
    ca_name = models.CharField(max_length=255)
    ca_description = models.CharField(max_length=255)
    def __str__(self):
        return self.ca_name


class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    def __str__(self):
        return self.name


class Supplier(models.Model):
    company_name = models.CharField(max_length=100)
    delivery_name = models.CharField(max_length=100)
    delivery_id = models.CharField(max_length=50, unique=True)  # Adding unique constraint
    company_address = models.TextField()

    def __str__(self):
        return self.company_name


class Product(models.Model):
    STATUS_CHOICES = [
            ('Allocated', 'Allocated'),
            ('Distributed', 'Distributed'),
            ('Free', 'Free'),
        ]

    # Using AutoField for primary key instead of IntegerField for better performance
    suppleir = models.ForeignKey(Supplier, null=True, on_delete=models.SET_NULL, related_name='products')
    subcategory = models.ForeignKey(SubCategory, on_delete=models.PROTECT, related_name='products')
    reciever = models.ForeignKey(CustomUser, on_delete=models.PROTECT, related_name='reciever')
    pro_name = models.CharField(max_length=255)
    import_means = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()  # Using PositiveIntegerField for quantity
    serial_no = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Free')
    inserted_date = models.DateField(default=timezone.now)  # Set default value to current date
    t_price = models.DecimalField(max_digits=10, decimal_places=2)
    u_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.pro_name


class Order(models.Model):
    # Adding unique constraint for the product name and description combination
    requester = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
    quantity = models.PositiveIntegerField()  # Using PositiveIntegerField for quantity
    description = models.TextField()
    STATUS_CHOICES = [
        ('Accepted', 'Accepted'),
        ('Rejected', 'Rejected'),
        ('InProgress', 'In Progress'),
    ]
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='InProgress')

    def __str__(self):
        return f"{self.product.pro_name} - {self.description}"


class Allocation(models.Model):
    order = models.ForeignKey(Order, null=True, on_delete=models.SET_NULL, related_name='allocations')
    allocator = models.ForeignKey(CustomUser, on_delete=models.PROTECT, related_name='allocated_allocations')
    receiver = models.ForeignKey(CustomUser, on_delete=models.PROTECT, related_name='received_allocations')
    product = models.ForeignKey(Product, on_delete=models.PROTECT, related_name='allocations')
    quantity = models.PositiveIntegerField()  # Using PositiveIntegerField for quantity
    schedule_time = models.DateField(default=timezone.now)
    STATUS_CHOICES = [
        ('Distributed', 'Distributed'),
        ('NotDistributed', 'Not Distributed'),
    ]
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)

    def __str__(self):
        return f"{self.product.pro_name}"


class Distribution(models.Model):
    storeman = models.ForeignKey(CustomUser, on_delete=models.PROTECT, related_name='distributions')
    allocation = models.ForeignKey(Allocation, on_delete=models.PROTECT, related_name='distributions')
    distributed_date = models.DateField(default=timezone.now)  # Set default value to current date

    
    def __str__(self):
        return f"{self.allocation.product.pro_name}"
