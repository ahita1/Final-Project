from django.db import models




class Supplier(models.Model):
    company_name = models.CharField(max_length=100)
    delivery_name = models.CharField(max_length=100)
    delivery_id = models.CharField(max_length=50)
    company_address = models.TextField()

    def __str__(self):
        return self.company_name
    

